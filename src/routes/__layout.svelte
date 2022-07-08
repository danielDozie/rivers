<script>
    import Header from "$lib/sections/Header.svelte";
    import Footer from '$lib/sections/Footer.svelte'
    import "../app.css";
</script>

<header>
    <Header />
</header>

<main>
    <slot />
</main>

<footer>
    <Footer />
</footer>