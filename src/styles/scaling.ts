import { Dimensions, PixelRatio, Platform, StatusBar, useWindowDimensions } from 'react-native';
useWindowDimensions

// ------------ DEVICE DIMENSIONS ------------
const { width, height } = Dimensions.get('screen');

export { width, height };

// ------------ TABLET / IPAD DETECTION ------------
export const isTablet =
  (PixelRatio.get() <= 2 && Math.min(width, height) >= 600) ||
  Math.max(width, height) >= 1024;

// ------------ BASE GUIDELINE SCREENS ------------
const guidelineBaseWidth = 375; // iPhone X width
const guidelineBaseHeight = 812; // iPhone X height

// ------------ WIDTH / HEIGHT PERCENTAGE ------------
export const wp = (percent: number): number => (width * percent) / 100;
export const hp = (percent: number): number => (height * percent) / 100;

// ------------ PURE SCALING (Pixel Perfect UI) ------------
export const scale = (size: number): number =>
  (width / guidelineBaseWidth) * size;

export const verticalScale = (size: number): number =>
  (height / guidelineBaseHeight) * size;

export const moderateScale = (size: number, factor = 0.5): number =>
  size + (scale(size) - size) * factor;

export const moderateScaleVertical = (size: number, factor = 0.5): number =>
  size + (verticalScale(size) - size) * factor;

// ------------ RESPONSIVE FONT SCALING ------------
export const RF = (fontSize: number): number => {
  const scaleValue = width / guidelineBaseWidth;
  const newSize = fontSize * scaleValue;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// ------------ RESPONSIVE SPACING / RADIUS ------------
export const RS = (size: number): number => {
  const scaleValue = width / guidelineBaseWidth;
  return Math.round(size * scaleValue);
};

// ------------ TEXT SCALE (HEIGHT PERCENT BASED) ------------
export const textScale = (percent: number): number => {
  const screenHeight = height;
  const ratio = height / width;

  const deviceHeight =
    Platform.OS === 'android'
      ? screenHeight - (StatusBar.currentHeight || 0)
      : screenHeight * (ratio > 1.8 ? 0.126 : 0.15);

  const heightPercent = (percent * deviceHeight) / 100;

  return Math.round(heightPercent);
};
