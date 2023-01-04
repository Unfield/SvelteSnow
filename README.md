# Svelte Snow

#### Properties

| Parameter      | Type            | Description                                                                            |
| :------------- | :-------------- | :------------------------------------------------------------------------------------- |
| `active`       | `boolean`       | **Optional**. Enables/Disables the rendering of snowflakes                             |
| `activeMonths` | `Array<Number>` | **Optional**. Enables/Disables the rendering of snowflakes based on the specific month |

`activeMonths` only applies if active is set to `true`

`activeMonths={[ 1 ]} = January and so on.`

## Usage/Examples

#### Always Snowing

```javascript
<script>
    import SvelteSnow from "svelte-snow";
</script>

<SvelteSnow>
    <!-- your content goes here -->
</SvelteSnow>
```

#### Snow Disabled

```javascript
<script>
    import SvelteSnow from "svelte-snow";
</script>

<SvelteSnow active={false}>
    <!-- your content goes here -->
</SvelteSnow>
```

#### Snowing from December till February

```javascript
<script>
    import SvelteSnow from "svelte-snow";
</script>

<SvelteSnow activeMonths={[ 1, 2, 12 ]}>
    <!-- your content goes here -->
</SvelteSnow>
```
