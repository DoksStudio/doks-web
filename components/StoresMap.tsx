"use client";

import { useEffect, useRef } from "react";

interface Store {
  id: number;
  name: string;
  address: string;
  city: string;
  lat: number;
  lng: number;
}

interface StoresMapProps {
  stores: Store[];
  activeStore: number | null;
  onMarkerClick?: (id: number) => void;
}

export default function StoresMap({ stores, activeStore, onMarkerClick }: StoresMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapInstance = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markersRef = useRef<{ id: number; marker: any }[]>([]);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    // Dynamically import leaflet (SSR safe)
    import("leaflet").then((L) => {
      // Fix default icon paths
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const map = L.map(mapRef.current!, {
        zoomControl: true,
        scrollWheelZoom: false,
      });

      // CartoDB Positron — clean minimal tiles, free, no API key
      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 20,
      }).addTo(map);

      // Custom square marker icon
      const createIcon = (active: boolean) =>
        L.divIcon({
          className: "",
          html: `<div style="
            width: ${active ? "16px" : "12px"};
            height: ${active ? "16px" : "12px"};
            background: #2D2D2D;
            border: 2px solid ${active ? "#A68763" : "#EAE0D2"};
            transition: all 0.3s;
          "></div>`,
          iconAnchor: [active ? 8 : 6, active ? 8 : 6],
        });

      stores.forEach((store) => {
        const marker = L.marker([store.lat, store.lng], { icon: createIcon(false) })
          .addTo(map)
          .bindPopup(`
            <div style="font-family: sans-serif; padding: 4px;">
              <strong style="font-size: 13px; color: #2D2D2D;">${store.name}</strong><br/>
              <span style="font-size: 11px; color: #8A8078;">${store.address}, ${store.city}</span>
            </div>
          `);

        marker.on("click", () => {
          onMarkerClick?.(store.id);
        });

        markersRef.current.push({ id: store.id, marker });
      });

      // Fit map to show all markers
      if (stores.length > 0) {
        const bounds = L.latLngBounds(stores.map((s) => [s.lat, s.lng] as [number, number]));
        map.fitBounds(bounds, { padding: [50, 50] });
      }

      mapInstance.current = map;
    });

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
        markersRef.current = [];
      }
    };
  }, [stores, onMarkerClick]);

  // Update markers on activeStore change
  useEffect(() => {
    if (!mapInstance.current) return;
    import("leaflet").then((L) => {
      markersRef.current.forEach(({ id, marker }) => {
        const active = id === activeStore;
        marker.setIcon(
          L.divIcon({
            className: "",
            html: `<div style="
              width: ${active ? "16px" : "12px"};
              height: ${active ? "16px" : "12px"};
              background: #2D2D2D;
              border: 2px solid ${active ? "#A68763" : "#EAE0D2"};
              transition: all 0.3s;
            "></div>`,
            iconAnchor: [active ? 8 : 6, active ? 8 : 6],
          })
        );
        if (active) {
          mapInstance.current.panTo([
            stores.find((s) => s.id === id)!.lat,
            stores.find((s) => s.id === id)!.lng,
          ]);
          marker.openPopup();
        }
      });
    });
  }, [activeStore, stores]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      />
      <div ref={mapRef} className="w-full h-[480px] md:h-[560px]" />
    </>
  );
}
