import { useState, useEffect } from 'react';

export enum OverlayPosition {
  Top = 'Top',
  Bottom = 'Bottom',
  Left = 'Left',
  Right = 'Right'
}

export type overlayPositions =
  | 'Top'
  | 'Bottom'
  | 'Left'
  | 'Right'
  | 'BottomLeft'
  | 'BottomRight'
  | 'TopLeft'
  | 'TopRight'
  | 'LeftTop'
  | 'LeftBottom'
  | 'RightTop'
  | 'RightBottom';

const useOverlayPosition = (
  targetRef,
  overlayRef,
  { defaultPosition, open }: { defaultPosition?: overlayPositions; open: boolean }
) => {
  const [availablePositions, setAvailablePositions] = useState<string[]>();
  const [position, setPosition] = useState<overlayPositions | undefined>(defaultPosition);
  const [overlaySize, setOverlaySize] = useState({ width: 0, height: 0 });

  const getPosition = () => {
    if (!targetRef.current || !(targetRef.current instanceof Element)) return [];
    const newPositions: string[] = [];
    const spaceAbove = targetRef.current.offsetTop;
    const spaceBelow =
      window.innerHeight - (targetRef.current.offsetTop + targetRef.current.offsetHeight);
    const spaceLeft = targetRef.current.offsetLeft;
    const spaceRight =
      window.innerWidth - (targetRef.current.offsetLeft + targetRef.current.offsetWidth);

    if (spaceAbove > overlaySize.height) newPositions.push(OverlayPosition.Top);
    if (spaceBelow > overlaySize.height) newPositions.push(OverlayPosition.Bottom);
    if (spaceLeft > overlaySize.width) newPositions.push(OverlayPosition.Left);
    if (spaceRight > overlaySize.width) newPositions.push(OverlayPosition.Right);

    return newPositions;
  };

  const getCombinedPosition = (availablePositions) => {
    const getAlignment = (position, alignmentOptions: overlayPositions[]) => {
      for (const alignment of alignmentOptions) {
        const oppositeDirection = alignmentOptions.filter((pos: string) => pos != alignment)[0];
        if (position.startsWith(alignment)) {
          return availablePositions?.includes(alignment) ? alignment : oppositeDirection;
        } else if (position.includes(alignment)) {
          return availablePositions?.includes(oppositeDirection) ? alignment : alignmentOptions[0];
        }
      }
      return alignmentOptions[0];
    };

    const verticalAlignment = getAlignment(defaultPosition, [
      OverlayPosition.Top,
      OverlayPosition.Bottom
    ]);
    const horizontalAlignment = getAlignment(defaultPosition, [
      OverlayPosition.Left,
      OverlayPosition.Right
    ]);
    const updatedString = defaultPosition
      ?.replace('Top', verticalAlignment)
      .replace('Bottom', verticalAlignment)
      .replace('Left', horizontalAlignment)
      .replace('Right', horizontalAlignment);

    return updatedString;
  };

  const handleOverlayPosition = () => {
    const newPositions = getPosition();

    if (typeof defaultPosition === 'string' && !(defaultPosition in OverlayPosition)) {
      const updatedPosition = getCombinedPosition(newPositions);
      setPosition(updatedPosition as overlayPositions);
      return;
    }
    if (defaultPosition && newPositions.includes(defaultPosition)) {
      setPosition(defaultPosition);
    } else {
      const positionMap = {
        [OverlayPosition.Top]: OverlayPosition.Bottom,
        [OverlayPosition.Bottom]: OverlayPosition.Top,
        [OverlayPosition.Left]: OverlayPosition.Right,
        [OverlayPosition.Right]: OverlayPosition.Left
      };
      setPosition(defaultPosition ? positionMap[defaultPosition] : OverlayPosition.Top);
    }
    setAvailablePositions(newPositions);
  };

  useEffect(() => {
    if (overlayRef.current && overlayRef.current instanceof Element) {
      const resizeObserver = new ResizeObserver((entries) => {
        if (entries[0] && entries[0].contentRect) {
          const { width, height } = entries[0].contentRect;

          setOverlaySize({
            width,
            height
          });
          handleOverlayPosition();
        }
      });

      resizeObserver.observe(overlayRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [overlayRef, targetRef, defaultPosition, open]);

  useEffect(() => {
    setPosition(defaultPosition);
    handleOverlayPosition();

    const handleScroll = () => {
      handleOverlayPosition();
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [targetRef, overlaySize, defaultPosition]);

  return { position, availablePositions };
};

export default useOverlayPosition;
