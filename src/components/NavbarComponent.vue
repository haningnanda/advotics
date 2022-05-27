<template>
    <nav class="navbar navbar-expand-lg fixed-top nav_class">
        <div class="brand">
            <img src="img/logo.jpg" width="100px">
        </div>
        <div class="ms-auto" id="rightside">
            <b-icon-person-circle></b-icon-person-circle>
            <b-icon-box-arrow-in-right></b-icon-box-arrow-in-right>
        </div>
        
    </nav>
</template>

<script>
export default {
    name: 'NavbarComponent'
}
</script>

<style>
.nav_class{
    background-color: white;
    color: black;
    padding: 20px;
}

.b-icon{
    margin-left: 20px;
}
</style>