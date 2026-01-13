# Design Document

## Overview

This design adds a sixth statistics card to the AI Dashboard (DashBoardLayerNine) to complete the grid layout. The implementation will create a new React component that follows the existing card pattern used in the UpgradeYourPlan component, displaying AI-related metrics with an icon, value, and trend indicator.

## Architecture

The solution follows the existing component architecture:
- A new child component will be created in `src/components/child/`
- The component will be imported and rendered in `DashBoardLayerNine.jsx`
- The component will use Bootstrap grid classes for responsive layout
- The component will follow the same styling patterns as existing stat cards

## Components and Interfaces

### New Component: AIMetricsCard

**Location:** `src/components/child/AIMetricsCard.jsx`

**Purpose:** Display a sixth statistics card showing AI-related metrics

**Structure:**
```jsx
const AIMetricsCard = () => {
  return (
    <div className='col-xxl-4 col-xl-6 col-sm-6'>
      <div className='radius-8 h-100 text-center p-20 bg-{color}-100'>
        <span className='w-44-px h-44-px radius-8 d-inline-flex justify-content-center align-items-center text-xl mb-12 bg-{color}-200 border border-{color}-400 text-{color}-600'>
          <i className='{icon-class}' />
        </span>
        <span className='text-neutral-700 d-block'>
          {metric-title}
        </span>
        <h6 className='mb-0 mt-4'>{metric-value}</h6>
      </div>
    </div>
  );
};
```

**Props:** None (static data for now, can be made dynamic later)

**Styling:**
- Background color: One of the available color schemes (e.g., `bg-warning-100`, `bg-cyan-100`)
- Icon container: Circular with matching color scheme
- Typography: Consistent with existing cards

### Modified Component: UpgradeYourPlan

**Changes Required:**
- Add the new AIMetricsCard as a 5th small card within the grid
- Adjust the grid layout to accommodate 6 cards total (2 rows of 3 cards each)
- Maintain responsive behavior

**Updated Structure:**
```jsx
<div className='col-md-8'>
  <div className='row g-3'>
    {/* Existing 4 cards */}
    <div className='col-sm-6 col-xs-6'>...</div>
    <div className='col-sm-6 col-xs-6'>...</div>
    <div className='col-sm-6 col-xs-6'>...</div>
    <div className='col-sm-6 col-xs-6'>...</div>
    
    {/* New 5th and 6th cards */}
    <div className='col-sm-6 col-xs-6'>...</div>
    <div className='col-sm-6 col-xs-6'>...</div>
  </div>
</div>
```

## Data Models

### Metric Data Structure

```typescript
interface MetricCard {
  title: string;           // e.g., "Total AI Requests"
  value: string | number;  // e.g., "45,230" or 45230
  icon: string;            // RemixIcon class name
  colorScheme: string;     // e.g., "warning", "cyan", "indigo"
  trend?: {
    value: string;         // e.g., "+12.5%"
    direction: 'up' | 'down';
    period: string;        // e.g., "Last 30 days"
  };
}
```

### Suggested Metrics for 6th Card

Options for the new card metric:
1. **Total AI Requests** - Shows total API calls to AI services
2. **Active Models** - Number of AI models currently in use
3. **Processing Time** - Average AI response time
4. **Token Usage** - Total tokens consumed
5. **Success Rate** - Percentage of successful AI operations

**Recommended:** "Total AI Requests" with a robot/AI icon

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Card Count Consistency
*For any* render of the UpgradeYourPlan component, the total number of small stat cards displayed should equal 6 (4 existing + 2 new).
**Validates: Requirements 1.1**

### Property 2: Responsive Layout Integrity
*For any* screen size breakpoint (xxl, xl, lg, md, sm), the cards should maintain proper grid alignment without overflow or layout breaks.
**Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5**

### Property 3: Style Consistency
*For any* stat card in the grid, the card should have consistent padding (p-20), border radius (radius-8), and icon size (w-44-px h-44-px).
**Validates: Requirements 2.1, 2.2, 2.3**

### Property 4: Icon and Color Pairing
*For any* stat card, the icon container background, border, and text colors should use the same color scheme family (e.g., all warning-* or all cyan-*).
**Validates: Requirements 2.3, 2.4**

## Error Handling

### Component Rendering
- If icon class is missing or invalid, fallback to a default icon (e.g., `ri-bar-chart-line`)
- If metric value is undefined, display "N/A" or "0"
- Component should not crash if data is missing

### Responsive Behavior
- Ensure grid classes are properly applied for all breakpoints
- Test on various screen sizes to prevent layout issues
- Use Bootstrap's responsive utilities to hide/show elements if needed

## Testing Strategy

### Unit Tests
- Test that the new component renders without errors
- Test that the component displays the correct metric title and value
- Test that the icon is rendered with the correct class
- Test that the color scheme is applied correctly
- Test that the component structure matches the existing card pattern

### Property-Based Tests
- **Property 1**: Generate random component renders and verify card count equals 6
- **Property 2**: Test responsive behavior across different viewport widths
- **Property 3**: Verify all cards have consistent styling properties
- **Property 4**: Verify icon and color scheme consistency

### Integration Tests
- Test that DashBoardLayerNine renders with the new card
- Test that the layout remains intact after adding the 6th card
- Test responsive behavior on mobile, tablet, and desktop viewports
- Visual regression testing to ensure design consistency

### Testing Configuration
- Use React Testing Library for component tests
- Use Jest for unit and integration tests
- Minimum 100 iterations for property-based tests
- Tag format: **Feature: ai-dashboard-sixth-card, Property {number}: {property_text}**

## Implementation Notes

1. **Color Scheme Selection**: Choose a color that hasn't been used in the existing 5 cards:
   - Existing: purple (lilac), success (green), info (cyan), danger (red)
   - Available: warning (yellow/orange), indigo, teal, pink

2. **Icon Selection**: Use RemixIcon classes that match the metric:
   - AI Requests: `ri-robot-line` or `ri-cpu-line`
   - Active Models: `ri-brain-line` or `ri-lightbulb-line`
   - Processing Time: `ri-time-line` or `ri-speed-line`

3. **Grid Layout**: The UpgradeYourPlan component currently has a 4-card grid. Adding 2 more cards will create a 2x3 grid (6 cards total).

4. **Responsive Considerations**:
   - On `col-sm-6`: 2 cards per row
   - On `col-xs-6`: 2 cards per row (mobile)
   - Maintain consistent spacing with `g-3` gap

5. **Future Enhancements**:
   - Make metric data dynamic via props or API
   - Add click handlers for drill-down functionality
   - Add animations on hover
   - Add trend indicators (up/down arrows with percentages)
