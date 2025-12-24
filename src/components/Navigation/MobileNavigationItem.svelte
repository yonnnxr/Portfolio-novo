<script lang="ts">
  import type { Item } from "./items";
  import { itemIds } from "./items";

  export let current: Item = "início";

  export let active: Item = "início";

  export let hide: () => void;
</script>

<li>
  <a
    href="/#{itemIds[current]}"
    class="block py-2 {active == current ? 'dark:text-accent-400' : ''}"
    on:click={hide}
  >
    {current}
  </a>
</li>
