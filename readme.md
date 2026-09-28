# P5.js: Trigonometry

[Deutsch](README_DE.md)

Visualises `sin()`, `cos()` and `tan()` as three animated dots that run
across the screen and leave a trail behind. Each curve is an instance of a
small class, so frequency, speed and trail can be set per curve. Useful for
getting a feel for the trigonometric functions and for building
oscillating motion.

## Installation

1. Open the folder in Visual Studio Code and start Live Server (click
   **Go Live** in the status bar).

Libraries (in `libraries/`): p5.js 1.10.0, p5.sound 1.0.1 (included, not used).

## Coding Help

- **`sketch.js` → `setup()`**: creates a full-window canvas and adds three
  curves to `curves`: `sin` in red, `cos` in green, `tan` in blue. Add,
  remove or change curves here.
- **`draw()`**: clears the background and calls `draw()` on every curve.
- **`class trigonometryCurve`**: the constructor takes the function, the
  colour and optionally `frequency` (number of periods across the width,
  default 2), `trailSize` (number of stored points, 100), `speed` (degrees
  per frame, 2) and `dotsize` (25). It sets `angleMode(DEGREES)`.
- **`trigonometryCurve.draw()`**: computes x from `frameCount` (wrapping
  at the right edge) and y from the trig function, stores the point and
  keeps only the last `trailSize` points. Older points are drawn smaller
  and darker. y is scaled by a quarter of the height around the middle, so
  `tan()` shoots off the canvas near its poles.
