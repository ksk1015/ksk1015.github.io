var appFile = null;

var app = new Vue({
    el: '#app',
    data: {
        samples: [
            {label: 'PROGRESSIVE JPEG', url: './0qDVI.jpg'},
            {label: 'JPEG', url: './ScSnx.jpg'},
            {label: 'INTERLACE PNG', url: './sZrJ2.png'},
            {label: 'PNG', url: './CIBbm.png'}
        ],
        seletedSample: -1,
        fileURL: '',
        currentSize: 0,
        zoom: false,
    },
    computed: {
        type () {
            return this.fileURL ? appFile.type : ''
        },
        size () {
            return this.fileURL ? appFile.size : 0
        },
        percent () {
            const percent = (this.currentSize / this.size) * 100
            return percent < 99 ? Math.ceil(percent) : Math.floor(percent)
        },
        src () {
            if (!this.fileURL) {
                return ''
            }
            if (this.size === this.currentSize) {
                return this.fileURL
            }
            const sliced = appFile.slice(0, this.currentSize)
            return URL.createObjectURL(sliced);
        },
        width () {
            return this.zoom ? this.$refs.img.naturalWidth * 2 : false
        }
    },
    watch: {
        fileURL () {
            this.zoom = false
            this.currentSize = Math.floor(this.size * 0.1)
        }
    },
    methods: {
        setFile (file) {
            appFile = file
            this.fileURL = URL.createObjectURL(file)
        },
        removeFile () {
            this.$refs.inputFile.value = ''
            this.seletedSample = -1
            appFile = null
            this.fileURL = ''
        },
        changeInputFile (evt) {
            var file = evt.target.files[0];
            if (file && !/^image\/.+/.test(file.type)) {
                evt.target.value = '';
                return alert('Select image file!');
            }
            if (file) {
                this.seletedSample = -1
                this.setFile(file);
            } else {
                this.removeFile();
            }
        },
        selectSample (index) {
            if (this.isSelected(index)) {
                return this.removeFile()
            }
            this.seletedSample = index
            this.$refs.inputFile.value = ''
            fetch(this.samples[index].url)
                .then(res => res.blob())
                .then(blob => {
                    this.setFile(blob)
                })
        },
        isSelected (index) {
            return index === this.seletedSample
        },
        toggleZoom () {
            this.zoom = !this.zoom
        }
    },
    mounted () {
        this.selectSample(0)
    }
})