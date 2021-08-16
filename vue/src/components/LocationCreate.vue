<template>
    <div class="container">
        <h1> Create List </h1>
        <div class="row">
            <div class="col-12">
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
                    <button type="button" style="float:right;" class="btn btn-success text-uppercase" @click="createLocation">Create Location</button>
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
                location: {
                    name: "",
                    address: "",
                    city: {},
                    city_id: null,
                    latitude: 0.0,
                    longitude: 0.0
                },
                cities: []
            }
        },
        methods: {
            cancel(){
                this.$router.push('/');
            },
            createLocation(){
                if(this.location.city != null){
                    this.location.city_id = this.location.city.city_id
                }
                this.$http.post('http://localhost:8000/locations/single',this.location)
                    .then(() => {
                        this.cancel();
                    })
                    .catch(data => {
                        console.log(data);
                    });
            },
        },
        mounted(){
            this.$http.get('http://localhost:8000/cities')
                .then(data => {
                    this.cities = data.data;
                })
                .catch(err => {
                    console.log(err)
                }) 
        }
    }
</script>