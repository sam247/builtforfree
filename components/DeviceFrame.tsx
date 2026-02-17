import { cn } from "@/lib/utils";

interface DeviceFrameProps {
  variant: "macbook" | "browser";
  url?: string;
  children: React.ReactNode;
  className?: string;
}

const DeviceFrame = ({ variant, url, children, className }: DeviceFrameProps) => {
  if (variant === "macbook") {
    return (
      <div className={cn("relative mx-auto max-w-full isolate", className)}>
        {/* MacBook Frame */}
        <div className="relative rounded-t-[18px] bg-[#1d1d1f] p-2 shadow-2xl">
          {/* Screen bezel */}
          <div className="relative overflow-hidden rounded-t-[12px] bg-[#000] border border-[#1d1d1f]/50">
            {/* Camera notch */}
            <div className="absolute left-1/2 top-0 z-10 h-4 w-32 -translate-x-1/2 rounded-b-full bg-[#1d1d1f] pointer-events-none" />
            
            {/* Screen content - fixed 16:10 aspect ratio */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[#000]">
              <div className="absolute inset-0">
                {children}
              </div>
            </div>
          </div>
        </div>
        
        {/* MacBook base */}
        <div className="relative">
          <div className="mx-auto h-1 w-[60%] rounded-b-full bg-[#1d1d1f] shadow-lg" />
          <div className="mx-auto mt-0.5 h-1 w-[55%] rounded-b-full bg-[#2d2d2f]" />
        </div>
      </div>
    );
  }

  // Browser variant
  return (
    <div className={cn("relative mx-auto max-w-full overflow-hidden rounded-lg border border-border bg-background shadow-lg isolate", className)}>
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-muted px-3 py-2">
        {/* Window controls */}
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        
        {/* URL bar */}
        <div className="flex-1 rounded bg-background px-3 py-1 text-xs text-muted-foreground">
          {url || "example.com"}
        </div>
      </div>
      
      {/* Browser content - fixed 16:10 aspect ratio */}
      <div className="relative aspect-[16/10] overflow-hidden bg-background">
        <div className="absolute inset-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DeviceFrame;
