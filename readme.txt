Smart Money Cockpit - Phase 5 Plaid Fix
-----------------------------------
This release locks chart sizes to prevent shrinking.

Fixes:
- .chart-canvas has fixed height (220px).
- .chart has min-height (280px).
- maintainAspectRatio:false ensures Chart.js respects CSS height.
