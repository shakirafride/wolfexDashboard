# Implementation Plan: AI Dashboard Sixth Card

## Overview

This implementation adds two more stat cards to the UpgradeYourPlan component, bringing the total from 4 to 6 cards. The cards will display AI-related metrics following the existing design pattern with icons, titles, and values.

## Tasks

- [ ] 1. Update UpgradeYourPlan component to add two new stat cards
  - Modify the grid structure in `src/components/child/UpgradeYourPlan.jsx`
  - Add a 5th card displaying "Total AI Requests" metric with robot icon and warning color scheme
  - Add a 6th card displaying "Active Models" metric with brain icon and indigo/teal color scheme
  - Ensure both cards follow the same structure: icon container, title, and value
  - Use appropriate RemixIcon classes for the icons
  - Apply consistent styling (radius-8, p-20, color backgrounds)
  - _Requirements: 1.1, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5_

- [ ]* 1.1 Write unit tests for the updated component
  - Test that 6 cards are rendered
  - Test that new cards display correct titles and values
  - Test that icons are rendered with correct classes
  - Test that color schemes are applied correctly
  - _Requirements: 1.1, 2.1, 2.2, 2.3_

- [ ] 2. Verify responsive layout behavior
  - Test the component renders correctly on desktop (3 columns per row)
  - Test the component renders correctly on tablet (2 columns per row)
  - Test the component renders correctly on mobile (2 columns per row)
  - Ensure proper spacing is maintained at all breakpoints
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

- [ ]* 2.1 Write property test for responsive layout
  - **Property 2: Responsive Layout Integrity**
  - **Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5**

- [ ] 3. Final verification and testing
  - Ensure all tests pass
  - Verify visual consistency with existing cards
  - Test on actual browser at different screen sizes
  - Ask the user if questions arise

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- The implementation focuses on modifying the existing UpgradeYourPlan component rather than creating a new component
- Suggested metrics: "Total AI Requests" (with `ri-robot-line` or `ri-cpu-line` icon) and "Active Models" (with `ri-brain-line` icon)
- Suggested color schemes: warning (yellow/orange) for AI Requests, indigo or teal for Active Models
- Sample values: "45,230" for AI Requests, "12" for Active Models
