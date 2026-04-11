"use client";

import { useEffect, useRef, useCallback } from "react";
import Script from "next/script";

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

const MAP_STYLES = [
  { elementType: "geometry", stylers: [{ color: "#f7f6f2" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#5a5a5a" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#f7f6f2" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#e8e6e0" }] },
  { featureType: "road.arterial", elementType: "labels.text.fill", stylers: [{ color: "#888888" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#d4d0c8" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#9e9e9e" }] },
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
  { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#404040" }] },
];

function markerIcon(active: boolean) {
  return {
    path: "M -8,-8 L 8,-8 L 8,8 L -8,8 Z",
    fillColor: active ? "#0a0a0a" : "#0a0a0a",
    fillOpacity: 1,
    strokeColor: active ? "#c8a96e" : "#ffffff",
    strokeWeight: active ? 3 : 2,
    scale: active ? 1.2 : 1,
  };
}

export default function StoresMap({ stores, activeStore, onMarkerClick }: StoresMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapInstance = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markersRef = useRef<{ id: number; marker: any; infoWindow: any }[]>([]);
  const initialized = useRef(false);

  const initMap = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const g = (window as any).google;
    if (!mapRef.current || !g || initialized.current) return;
    initialized.current = true;

    mapInstance.current = new g.maps.Map(mapRef.current, {
      center: { lat: 42.7000, lng: 23.3100 },
      zoom: 13,
      styles: MAP_STYLES,
      disableDefaultUI: true,
      zoomControl: true,
      zoomControlOptions: { position: g.maps.ControlPosition.RIGHT_BOTTOM },
    });

    stores.forEach((store) => {
      const marker = new g.maps.Marker({
        position: { lat: store.lat, lng: store.lng },
        map: mapInstance.current,
        title: store.name,
        icon: markerIcon(false),
      });

      const infoWindow = new g.maps.InfoWindow({
        content: `
          <div style="padding:10px 6px;font-family:'Inter',sans-serif;min-width:160px;">
            <p style="font-weight:600;font-size:13px;color:#0a0a0a;margin:0 0 3px;">${store.name}</p>
            <p style="font-size:11px;color:#666;margin:0;">${store.address}</p>
            <p style="font-size:11px;color:#666;margin:0;">${store.city}</p>
          </div>
        `,
      });

      marker.addListener("click", () => {
        markersRef.current.forEach(({ infoWindow: iw }) => iw.close());
        infoWindow.open(mapInstance.current, marker);
        onMarkerClick?.(store.id);
      });

      markersRef.current.push({ id: store.id, marker, infoWindow });
    });
  }, [stores, onMarkerClick]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const g = (window as any).google;
    if (!mapInstance.current || !g) return;

    markersRef.current.forEach(({ id, marker }) => {
      marker.setIcon(markerIcon(id === activeStore));
    });

    if (activeStore !== null) {
      const store = stores.find((s) => s.id === activeStore);
      if (store) mapInstance.current.panTo({ lat: store.lat, lng: store.lng });
    }
  }, [activeStore, stores]);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

  return (
    <div className="relative w-full h-[480px] md:h-[560px] overflow-hidden">
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}`}
        strategy="afterInteractive"
        onLoad={initMap}
      />
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}
