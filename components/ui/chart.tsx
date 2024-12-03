'use client';

import React from 'react';
import * as RechartsPrimitive from 'recharts';
import { cn } from '@/lib/utils';
import { TooltipProps } from 'recharts';

// Extend TooltipProps to include custom properties
interface ExtendedTooltipProps extends TooltipProps {
  className?: string;
  labelClassName?: string;
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: 'line' | 'dot' | 'dashed';
  nameKey?: string;
  labelKey?: string;
  color?: string;
}

const ChartTooltipContent = React.forwardRef<HTMLDivElement, ExtendedTooltipProps>(
  (
    {
      active,
      payload,
      className,
      label,
      labelFormatter,
      labelClassName,
      hideLabel = false,
      hideIndicator = false,
      indicator = 'dot',
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref
  ) => {
    // Generate the tooltip label
    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }
    
      const [item] = payload; // Use the first item in the payload
      const value: string | number | readonly (string | number)[] =
        typeof label === 'string' ? label : item.name || item.value || '';
    
      // Handle array values
      const formattedValue = Array.isArray(value)
        ? value.join(', ') // Convert array to a comma-separated string
        : value;
    
      // Ensure formattedValue is string or number before passing it to labelFormatter
      if (labelFormatter) {
        return (
          <div className={cn('font-medium', labelClassName)}>
            {labelFormatter(String(formattedValue))} {/* Convert to string explicitly */}
          </div>
        );
      }
    
      if (!formattedValue) {
        return null;
      }
    
      return <div className={cn('font-medium', labelClassName)}>{String(formattedValue)}</div>;
    }, [hideLabel, label, labelFormatter, labelClassName, payload]);
    

    // Render nothing if not active or no payload
    if (!active || !payload?.length) {
      return null;
    }

    const nestLabel = payload.length === 1 && indicator !== 'dot';

    return (
      <div
        ref={ref}
        className={cn(
          'grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl',
          className
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const indicatorColor = color || item.payload.fill || item.color;

            return (
              <div
                key={item.name || index}
                className={cn(
                  'flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground',
                  indicator === 'dot' && 'items-center'
                )}
              >
                {!hideIndicator && (
                  <div
                    className={cn(
                      'shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]',
                      {
                        'h-2.5 w-2.5': indicator === 'dot',
                        'w-1': indicator === 'line',
                        'w-0 border-[1.5px] border-dashed bg-transparent':
                          indicator === 'dashed',
                        'my-0.5': nestLabel && indicator === 'dashed',
                      }
                    )}
                    style={
                      {
                        '--color-bg': indicatorColor,
                        '--color-border': indicatorColor,
                      } as React.CSSProperties
                    }
                  />
                )}
                <div
                  className={cn(
                    'flex flex-1 justify-between leading-none',
                    nestLabel ? 'items-end' : 'items-center'
                  )}
                >
                  <div className="grid gap-1.5">
                    {nestLabel ? tooltipLabel : null}
                    <span className="text-muted-foreground">{item.name}</span>
                  </div>
                  {item.value && (
                    <span className="font-mono font-medium tabular-nums text-foreground">
                      {item.value.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

ChartTooltipContent.displayName = 'ChartTooltipContent';

export default ChartTooltipContent;
