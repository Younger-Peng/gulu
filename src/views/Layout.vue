<template>
    <z-layout class="layout-container">
        <z-sider>
            <section>I am Side</section>
        </z-sider>
        <z-layout>
            <z-header>
                <header>I am Header</header>
            </z-header>
            <z-content>
                <main>I am Main</main>
            </z-content>
            <z-footer>
                <footer>I am Footer</footer>
            </z-footer>
        </z-layout>
    </z-layout>
</template>
<script>
import ZLayout from '../components/layout/z-layout'
import ZHeader from '../components/layout/z-header'
import ZContent from '../components/layout/z-content'
import ZSider from '../components/layout/z-sider'
import ZFooter from '../components/layout/z-footer'
export default {
    name: 'layout-page',
    components: {
        'z-layout': ZLayout,
        'z-header': ZHeader,
        'z-content': ZContent,
        'z-sider': ZSider,
        'z-footer': ZFooter
    }
}
</script>
<style lang="scss" scoped>
    .layout-container {
        height: 500px;
    }
</style>