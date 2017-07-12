<p align="center">
<img src="http://www.agricolailfagiano.com/wp-content/uploads/2015/11/sez-fagiano-home.png" width="200"/>
<br><i><b>fagiano</b> [latin: phasianus, greek: ϕασιανός]</i>
</p>


# FaJanus
NodeJS JANUS Event Phase Simulator for CI Testing. Do not fly this.

```
npm install
npm start
```

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
