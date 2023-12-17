<script lang="ts">
  export let pages: {
    title: string;
    slug: string;
  }[];
  let isNavbarOpen = false;

  function toggleNavbar() {
    isNavbarOpen = !isNavbarOpen;
  }
</script>

<header class="flex justify-between flex-row align-middle items-center">
  <div class="flex-0 w-40 md:w-52 xl:mr-4">
    <a href="/">
      <img src="/img/tedxcuneo_logo.svg" alt="Logo TEDxCuneo svg" />
    </a>
  </div>
  <button class="icon" on:click={toggleNavbar} class:open={isNavbarOpen}>
    <span></span>
    <span></span>
    <span></span>
  </button>
  <nav class:open={isNavbarOpen} class="bg-tedBlack">
    <ul
      class="flex flex-col md:flex-row justify-center md:justify-end items-center md:gap-4"
    >
      {#each pages as page}
        <li>
          <a
            href={page.slug}
            class="text-white hover:text-gray-300 transition-colors duration-200"
          >
            {page.title}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style lang="scss">
  @import "src/styles/variables.scss";

  header {
    height: $header-height;
  }
  .icon {
    cursor: pointer;
    display: flex;
    gap: 6px;
    flex-direction: column;
    transition: transform 0.3s ease-in-out;
    padding: 6px;
    & span {
      width: 25px;
      height: 2px;
      background-color: white;
      transition: 0.3s;
      border-radius: 0.125rem;
      transform-origin: top left;
    }
    &.open span:nth-child(1) {
      transform: rotate(45deg) translate(3px, -3.5px);
    }

    &.open span:nth-child(2) {
      opacity: 0;
    }

    &.open span:nth-child(3) {
      transform: rotate(-45deg) translate(1px, 3px);
    }
  }
  nav {
    transition:
      visibility 0s,
      opacity 0.3s ease-in-out;
    position: fixed;
    top: $header-height;
    left: 0;
    width: 100%;
    height: 100vh;
    opacity: 0;
    visibility: hidden;
    &.open {
      visibility: visible;
      opacity: 1;
    }
  }
</style>
