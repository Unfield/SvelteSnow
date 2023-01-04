<script>
import "./svelteSnow.css";
export let active = true;
export let activeMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
if (active) {
  let currentMonth = new Date().getMonth() + 1;
  if (activeMonths.includes(currentMonth))
    active = true;
  else
    active = false;
}
</script>

{#if active}
    <div class="snowflake">❅</div>
    <div class="snowflake">❅</div>
    <div class="snowflake">❆</div>
    <div class="snowflake">❅</div>
    <div class="snowflake">❆</div>
    <div class="snowflake">❆</div>
    <div class="snowflake">❆</div>
    <div class="snowflake">❅</div>
    <div class="snowflake">❅</div>
    <div class="snowflake">❆</div>
    <div class="snowflake">❅</div>
{/if}

<slot />