import { execSync } from 'child_process'
console.log('Check Docker for Influx')

try {
  execSync('docker ps --all | grep -c "my-influxdb"');
  execSync('docker start my-influxdb')
  console.log('my-influxdb already exists')
} catch {
  console.log('Starting InfluxDb')
  execSync('docker create --restart=always -p 8086:8086 -v $PWD/data:/var/lib/influxdb --name my-influxdb influxdb')
  execSync('docker start my-influxdb')
  console.log('my-influxdb running')
}