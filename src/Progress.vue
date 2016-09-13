<template>
    <div class="progress">
        <div role="progressbar" 
            :class="['progress-bar', {
                'progress-bar-success': type === 'success',
                'progress-bar-warning': type === 'warning',
                'progress-bar-info': type === 'info',
                'progress-bar-danger': type === 'danger',
                'progress-bar-striped': striped,
                'active':animated
            }]"
            :style="{ 
                'width': +value + '%',
            }"
        >
            {{ showProgress ? value + '%' : '' }}
        </div>
    </div>
</template>

<style>
.progress-bar {
    min-height: 1px;
}
</style>

<script>
export default {
    name: 'vc-progress',
    props: {
        value: {
            type: [Number, String],
            required: true
        },
        showProgress: {
            type: Boolean,
            default: true 
        },
        type: {
            type: String
        },
        striped: {
            type: Boolean,
            default: false
        },
        animated: {
            type: Boolean,
            default: false
        }
    }
}
</script>
