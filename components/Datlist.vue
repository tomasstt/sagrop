<template>
    <div>
        <h3>resasd</h3>
        <ul>
            <li v-for="(review,index) in reviews" :key="index">
                        {{ review.h }} aaaaa {{ review.description }}
            </li>
            "{{ review.review }}"
        </ul>

    </div>
</template>

<script>
    export default {
        props: {
            reviews: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>