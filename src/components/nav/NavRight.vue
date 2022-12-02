<template>
  <div class="d-flex">
    <img
      class="me-3 search-icon"
      src="../../assets/images/home/search.png"
      alt=""
    />
    <img class="bar-icon" src="../../assets/images/home/bar.png" alt="" />
  </div>
  <form class="d-flex d-none">
    <input
      class="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
    <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
</template>

<style>
.search-icon,
.bar-icon {
  cursor: pointer;
}
</style>
