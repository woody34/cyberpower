const script = `
docker run --rm \
      -e INFLUXDB_DB=db0 \
      -e INFLUXDB_ADMIN_USER=admin -e INFLUXDB_ADMIN_PASSWORD=supersecretpassword \
      -e INFLUXDB_USER=telegraf -e INFLUXDB_USER_PASSWORD=secretpassword \
      -v $PWD:/var/lib/influxdb \
      influxdb /init-influxdb.sh
`
import { execSync } from 'child_process'
console.log('Check Docker for Influx')

/*
  Docker Influx: https://hub.docker.com/_/influxdb
*/


try {
  console.log('Initializing InfluxDb')
  execSync(script);

} catch {
  console.error('Unable to Initialize InfluxDb');
}