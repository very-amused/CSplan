<script lang="ts">
  import HueSlider from './hue.svelte'
  import LightnessSlider from './lightness.svelte'
  import SaturationSlider from './saturation.svelte'
  import Plane from './plane.svelte'
  let hue = 0
  let saturation = 0
  let lightness = 0
  // Slider width MUST be declared in px, because radii for all cursors is calculated as r/2
  export let sliderWidth = 16
  const cursorRadius = sliderWidth/2
  const sideways = true
</script>

<div class="grid grid-small" style="--slider-width: {sliderWidth}px;">
  <Plane {hue} {saturation} {lightness} {cursorRadius} on:colorchange/>
  <HueSlider on:colorchange={(e) => hue = e.detail} {sideways}/>
  <LightnessSlider on:lightnesschange={(e) => lightness = e.detail} {sideways}/>
  <SaturationSlider {hue} {lightness} on:saturationchange={(e) => saturation = e.detail} {sideways}/>
</div>

<style>
  .grid {
    display: grid;
    grid-template-rows: 1fr repeat(3, var(--slider-width));
    row-gap: 0.5rem;
    column-gap: 0.75rem;
    width: 100%;
    height: 100%;
  }
  /* It's best to clearly and explicitly define grid coordinates for each canvas in one place */
  .grid-small :global(.color-plane) {
    grid-column: 1;
    grid-row: 1;
  }
  .grid-small :global(.hue-slider) {
    grid-column: 1;
    grid-row: 2;
  }
  .grid-small :global(.lightness-slider) {
    grid-column: 1;
    grid-row: 3;
  }
  .grid-small :global(.saturation-slider) {
    grid-column: 1;
    grid-row: 4;
  }
</style>
