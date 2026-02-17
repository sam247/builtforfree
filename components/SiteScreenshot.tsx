"use client";

import { useState } from "react";
import Image from "next/image";

interface SiteScreenshotProps {
  src: string;
  alt: string;
  siteName: string;
  industry: string;
  priority?: boolean;
  sizes?: string;
}

const SiteScreenshot = ({
  src,
  alt,
  siteName,
  industry,
  priority = false,
  sizes,
}: SiteScreenshotProps) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
        <div className="text-center px-4">
          <p className="text-sm font-semibold text-foreground mb-1">{siteName}</p>
          <p className="text-xs text-muted-foreground mb-2">{industry}</p>
          <p className="text-xs text-muted-foreground/70">Screenshot coming soon</p>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
        priority={priority}
        onError={() => setImageError(true)}
      />
    </div>
  );
};

export default SiteScreenshot;
