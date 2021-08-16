<template>
    <div class="container">
        <h1> List of Locations </h1>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">ID </th>
                    <th scope="col">Name </th>
                    <th scope="col">Address </th>
                    <th scope="col">City </th>
                    <th scope="col">Latitude </th>
                    <th scope="col">Longitude </th>
                    <th scope="col"> Action </th>
                </tr>
            </thead>
            <tbody>
                <tr  v-for="(item,i) in locations" :key="i">
                    <th scope="row">{{ i+1 }}</th>
                    <td style="cursor:pointer;" @click="goTo(item.location_id)">{{ item.name }} </td>
                    <td>{{ item.address }} </td>
                    <td>{{ item.city.name }} </td>
                    <td>{{ item.latitude }} </td>
                    <td>{{ item.longitude }} </td>
                    <td> <button @click="deleleLocation(item.location_id)" class="btn btn-danger"> Delete</button></td>
                </tr>
            </tbody>
        </table>
        <div class="footer" style="text-align:right;">
            <button type="button" class="btn btn-primary text-uppercase" @click="createLocation()">Create Location</button>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            locations:[]
        }
    },
    methods: {
        createLocation(){
            this.$router.push('/location-create');
        },
        goTo(id){
            this.$router.push('/location-details/'+id);
        },
        deleleLocation(id){
            this.showAlert(id);
        },
        showAlert(id) {
            this.$swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
                closeOnCancel: true
                }).then((result) => {
                    if (result.value) {
                        this.$http.delete('http://localhost:8000/locations',{ data: {location_id: id}})
                            .then(data => {
                                this.locations = data.data;
                                location.reload();
                            })
                            .catch(data => {
                                console.log(data);
                            });
                    }
            })
        },
    },
    mounted(){
        this.$http.get('http://localhost:8000/locations')
            .then(data => {
                this.locations = data.data;
            })
            .catch(data => {
                console.log(data);
            })
    }
};

</script>
