<script>
  import user from '../stores/user'
  import QuickActions from './quick-actions.svelte'
  const links = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Todo Lists',
      href: '/lists',
      needsLogin: true
    },
    {
      title: 'Tags',
      href: '/tags',
      needsLogin: true
    }
  ]
</script>

<nav>
  <!-- Magic stuff for mobile -->
  <input id="bmenub" type="checkbox" class="show">
  <label for="bmenub" class="burger pseudo button">
    <i class="fas fa-bars"></i>
  </label>
  
  <div class="menu">
  {#each links as link}
    {#if link.needsLogin && $user.isLoggedIn}
      <a class="pseudo button" sapper:prefetch href={link.href}>{link.title}</a>
    {:else if !link.needsLogin}
      <a class="pseudo button" sapper:prefetch href={link.href}>{link.title}</a>
    {/if}
  {/each}
  <div class="right">
    {#if $user.isLoggedIn}
      <span>{$user.user.email}</span>
      <!-- Quick actions dropdown -->
      <QuickActions/>
    {:else}
      <a class="pseudo button login" href="/login">Log In</a>
      <a class="pseudo button register" href="/register">Register</a>
    {/if}
  </div>
  </div>
</nav>

<style>
  :root {
    --user-name-margin: 0.5rem;
  }
  /* Navbar styling */
  nav, .menu {
    padding: 0;
    background: var(--background-dark);
    color: whitesmoke;
  } 
  nav {
    position: relative;
  }
  /* Desktop styles */
  @media screen and (min-width: 960px) {
    .menu {
      display: flex;
      flex-direction: row;
      width: 100%;
    }
    .menu .right {
      margin-left: auto;
    }
    /* Extra right margin for the user's name */
    .menu .right span {
      margin-right: var(--user-name-margin);
    }
  }
  /* Mobile styles */
  @media screen and (max-width: 960px) {
    .menu {
      display: flex;
      flex-direction: column;
      background: #333;
      width: 100%;
      padding: 1rem;
    }
    .menu .right {
      width: 100%;
      display: flex;
      flex-direction: column;
      text-align: center; /* Show the user's name/email in the center of the menu without enabling full center alignment */
    }
    /* Extra bottom margin for the user's name */
    .menu .right span {
      margin-bottom: var(--user-name-margin);
    }
  }
  /* Tighter item spacing */
  a {
    margin-right: 0;
  }

  /* Register and login buttons get special colors */
  .register {
    background: var(--bold-blue);
  }
  .login {
    background: var(--light-purple)
  }
</style>
