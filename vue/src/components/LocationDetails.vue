<template>
    <div class="container">
        <h1 style="padding-bottom:50px;">Location Details </h1>
        <div class="row">
            <div class="col-6">
                <div style="width: 100%"><iframe width="100%" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" :src="'https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q='+ location.latitude + ',%20' + location.longitude + '+(Test)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'"></iframe></div>
            </div>
            <div class="col-6">
                <div class="row">
                    <div class="col-6">
                        <label style="width:100%;text-align:left;">Name:</label>
                        <input style="width:100%;" type="text" v-model="location.name"/>
                    </div>
                    <div class="col-6">
                        <label style="width:100%;text-align:left;">Address:</label>
                        <input style="width:100%;" type="text" v-model="location.address"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <label style="width:100%;text-align:left;">Longitude:</label>
                        <input style="width:100%;" type="number" v-model="location.longitude"/>
                    </div>
                    <div class="col-6">
                        <label style="width:100%;text-align:left;">Latitude:</label>
                        <input style="width:100%;" type="number" v-model="location.latitude"/>
                    </div>
                    <div class="col-12">
                        <select style="width:100%; padding:7px; margin-top: 10px" v-model="location.city">
                            <option disabled value="">Please select one</option>
                            <option v-for="item in cities" :key="item.city_id" :value="item">
                                {{ item.name }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="footer" style="margin-top:20px;">
                    <button type="button" style="float:right;" class="btn btn-primary text-uppercase" @click="editLocation">Edit Location</button>
                    <button type="button" style="float:left;" class="btn btn-danger text-uppercase" @click="cancel">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            location:{
                location_id: null,
                name: "",
                address: "",
                city_id: null,
                city: {},
                latitude: 0.0,
                longitude: 0.0
            },
            cities: []
        }
    },
    methods: {
        editLocation(){ 
            let self = this;
            self.location.city_id = self.location.city.city_id;
            self.showAlert();
        },
        showAlert() {
            this.$swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, edit it!',
                closeOnCancel: true
                }).then((result) => {
                    if (result.value) {
                        this.$http.put('http://localhost:8000/locations', this.location )
                            .then(() => {
                                this.cancel();
                            })
                            .catch(data => {
                                console.log(data);
                            });
                    }
            })
        },
        cancel(){
            this.$router.push('/');
        },
    },
    mounted(){
        this.$http.get('http://localhost:8000/locations/single?location_id='+this.$route.params.id)
            .then(data => {
                this.location = data.data;
                this.location.location_id = +this.$route.params.id;
                this.$http.get('http://localhost:8000/cities')
                .then(data => {
                    this.cities = data.data;
                })
                .catch(err => {
                    console.log(err)
                }) 
            })
            .catch(data => {
                console.log(data);
            })
    }   
}
</script>