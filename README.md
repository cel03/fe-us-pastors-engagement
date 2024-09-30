# fe-us-pastors-engagement

## Overview

This project visualizes the engagement data of pastors across the United States using a map. It highlights the headquarters of a pastor and shows engagement lines to various states.

## Prerequisites

- Node.js (version 18.x)
- npm (version 10.x)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/fe-us-pastors-engagement.git
   cd fe-us-pastors-engagement
   ```

2. **Install dependencies:**

   Using npm:

   ```sh
   npm install
   ```

## Running the App

1. **Start the development server:**

   Using npm:

   ```sh
   npm run dev
   ```

2. **Open your browser and navigate to:**

   ```
   http://localhost:3000
   ```

## Project Structure

- **src/components**: Contains React components used in the app.
- **src/helpers**: Utility functions and helpers.
- **src/assets**: Static assets like geo-json files.
- **src/constants**: Constant values used throughout the app.
- **src/services**: API service functions.
- **src/mockdata**: Mock data for development and testing.

## Key Files

- **ImpactMap Component**: Main component that renders the map and handles data fetching.

- **CustomGeographies Component**: Component for rendering custom geographies on the map.

- **Curve Path Helper**: Helper functions for generating SVG paths for curved lines.

- **Engagement Data Service**: Service for fetching engagement data from the API.
