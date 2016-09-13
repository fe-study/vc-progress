import Vue from 'vue'
import vcProgress from '../src'

new Vue({
	el: '#app',
	data () {
		return {
            bools: {
                'true': true,
                'false': false
            },
            value: 80,
            showProgress: true,
            type: 'success',
            striped: true,
            animated: true
        }
	},
    methods: {
        removeProgressLabel () {
            this.showProgress = false
        },
        typeToDanger () {
            this.type = 'danger'
        }
    },
	components: {
        vcProgress
	}
})
