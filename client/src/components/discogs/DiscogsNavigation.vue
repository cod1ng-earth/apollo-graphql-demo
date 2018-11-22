<template>
    <section>
        <div class="navigation">
            <router-link :to="{ name: 'discogs-search-artists'}">Search artists</router-link>
        </div>
    </section>
</template>

<style scoped>
    .navigation {
        margin-top: 1em;
    }

</style>
