// 目前只支持app-main区间的sticky

<template>
    <div :style="{ height: height + 'px', zIndex: zIndex }">
        <div :class="className" :style="{ top: isSticky ? stickyTop + 'px' : '', zIndex: zIndex, position: position, width: width, height: height + 'px' }">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'mSticky',
    props: {
        stickyTop: {
            type: Number,
            default: 0
        },
        zIndex: {
            type: Number,
            default: 1
        },
        className: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            active: false,
            position: '',
            width: undefined,
            height: undefined,
            isSticky: false
        }
    },
    watch: {
        '$store.state.collapse'() {
            // this.handleScroll()
        }
    },
    mounted() {
        this.height = this.$el.getBoundingClientRect().height
        document.querySelector('.app-main').addEventListener('scroll', this.handleScroll)
        document.querySelector('.app-main').addEventListener('resize', this.handleResize)
    },
    activated() {
        this.handleScroll()
    },
    destroyed() {
        document.querySelector('.app-main').removeEventListener('scroll', this.handleScroll)
        document.querySelector('.app-main').removeEventListener('resize', this.handleResize)
    },
    methods: {
        sticky() {
            if (this.active) {
                return
            }
            this.position = 'fixed'
            this.active = true
            this.width = this.width + 'px'
            this.isSticky = true
        },
        handleReset() {
            if (!this.active) {
                return
            }
            this.reset()
        },
        reset() {
            this.position = ''
            this.width = 'auto'
            this.active = false
            this.isSticky = false
        },
        handleScroll() {
            const width = this.$el.getBoundingClientRect().width
            this.width = width || 'auto'
            const offsetTop = this.$el.getBoundingClientRect().top
            if (offsetTop < this.stickyTop) {
                this.sticky()
                return
            }
            this.handleReset()
        },
        handleResize() {
            if (this.isSticky) {
                this.width = this.$el.getBoundingClientRect().width + 'px'
            }
        }
    }
}
</script>
