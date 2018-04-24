<p align="center">
<img src="http://www.agricolailfagiano.com/wp-content/uploads/2015/11/sez-fagiano-home.png" width="200"/>
<br><i><b>fagiano</b> [latin: phasianus, greek: ϕασιανός]</i>
</p>


# FaJanus
NodeJS JANUS Event Phase Simulator for CI Testing. Do not fly this.

```
npm install
node fajanus.js --file /path/to/file.js --url http://your.socket:1234
```

##### Flight of the FaJanus
<img src="https://camo.githubusercontent.com/45387b77b5611c19312f67eb6bf40451046b4e28/687474703a2f2f692e696d6775722e636f6d2f694b45566c47622e706e67" />

#### Pastash Recipe
```
input {
 http {
    host => 127.0.0.1
    port => 8080
 }
}

filter{
  json_fields{}
  app_janus{} 
}

output {
 elasticsearch{
   host => your.elk.stack
   port => 9200
   bulk_limit => 1000
   bulk_timeout => 100
   index_prefix => janus
   data_type => event
 }
}

```
