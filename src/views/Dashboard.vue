<template>
    <div class="container">
        <div class="row">
            <div class="col-8">
                <h2 id="dash">Dashboard</h2>
            </div>
            <div class="col" id="period">
                <Periode/>
            </div>
        </div>

        <div class="headmarket">
            MARKET INSIGHTS
        </div>

        <div class="sales">
            <div class="row">
                <div class="col-8">
                    <p>Sales Turnover</p>
                    <h4>Rp 3,600,000</h4>
                    <p><b class="persentage">13,8%</b> last period in products sold</p>
                </div>
                <div class="col">
                    <img src="img/sl-to.svg"/>
                </div>
            </div>
        </div>

        <div class="detailsales">
            <div class="cardbox" id="chartbox">
                <div class="row">
                    <div class="col-9">
                        <h5>AVERAGE PURCHASE VALUE</h5>
                    </div>
                    <div class="col">
                        <select>
                        <option>Last 6 Month</option>
                        <option>Last 1 week</option>
                    </select> 
                    </div>
                </div>
                <Bar/>
            </div>
            <div class="cardbox">
                <h5>BEST SELLING SKU</h5>
                <Product
                    v-for="order_data in bestseller.slice(0,5)"
                    :order_data = "order_data"
                    :key="order_data.product_name"
                />
            </div>

            <div class="cardbox">
                <h5>TOP COMPETITOR SKU</h5>
                <Product
                    v-for="order_data in topcompetitor.slice(0,5)"
                    :order_data = "order_data"
                    :key="order_data.product_name"
                />
            </div>
        </div>
    </div>
    
</template>

<script>
import dummy_data from '../data/dummy.json'
import Product from '../components/Product.vue'
import Periode from '../components/Periode.vue';
import Bar from '../components/Bar.vue'

var rows = dummy_data.order_data;
var competitors = rows.filter(row=>row.company_name!='Our Company');
var user = rows.filter(row=>row.company_name==='Our Company');
console.log(user);
console.log(competitors);

function occ(rows){
var occurences = rows.reduce(function (r, row) {
    r[row.product_name] = ++r[row.product_name] || 1;
    return r;
}, {});
return occurences;
}

function result(occurences) {
    var result = Object.keys(occurences).map(function (key) {
    var harga = (rows.filter(row=>
        row.product_name.includes(key))
    )[0].price;
    return { product_name: key, value: occurences[key], price: harga};
});
return result;
}

var bestseller = result(occ(user));
var topcom = result(occ(competitors));

bestseller.sort(function(a, b){
    return b.value - a.value;
});

topcom.sort(function(a, b){
    return b.value - a.value;
});

console.log(topcom);
console.log(bestseller);


export default {
    name: 'dashboard',
    components:{
    Product,
    Periode,
    Bar
},
    data(){
        return{
            dummydata: rows,
            topcompetitor: topcom,
            bestseller: bestseller
        };
    },
};
</script>

<style>
.detailsales{
    display: flex;
}

.cardbox{
    text-align: left;
    margin-left: 20px;
    padding: 15px;
    background-color: white;
}

.sales{
    text-align: left;
    background-color: white;
    margin: 20px;
    padding: 10px;
    width: 400px;
}

.headmarket{
    background-color: #37B04C;
    color: white;
    font-weight: bold;
    text-align: left;
    padding: 10px;
}

#dash{
    font-weight: bold;
    text-align: left;
}

.persentage{
    color: red;
}

#chartbox{
    width: 600px;
}
.container {
    padding-top: 100px;
    padding-left: 78px;
}
</style>