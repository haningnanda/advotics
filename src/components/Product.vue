<template>
    <div class="cardproduct">
        <div class="detprod">
            <div class="imgprod">
                <img src="img/bg-sv.jpg" width="50px" alt="foto">
            </div>
            <div class="dataprod">
                {{order_data.product_name}}
                <br>
                <b-row>
                    
                    <b-col>Rp {{order_data.price}}</b-col>
                    <b-col>
                        [{{order_data.value}}]
                    </b-col>
                </b-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'order_data',
    props: ['order_data']
}
</script>

<style>
.detprod{
    display: flex;
    margin-bottom: 10px;
}

.detprod img{
    margin-right: 30px;
}
</style>