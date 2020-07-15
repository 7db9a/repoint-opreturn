module.exports = {
    getTx: getTx,
}

function getTx(key, opcode, opcode, msg, fee, rpc_uri, safe) { 
    const datapay = require('datapay')
    var config = {
      safe: safe,
      data: [opcode, msg],
      pay: {
        key: key,
        rpc: rpc_uri,
      }
    }
    datapay.build(config, function(error, tx) {

        console.log(tx.toString())
    })
}

// Get's args passed by cli.
const args = process.argv.slice(2)
const key = args[0]
const opcode = args[1]
const msg = args[2]
const fee = parseInt(args[3], 10) //The last arg is the radix or base number.
const rpc_uri = args[4]
const safe = (args[5] == 'true')

getTx(key, opcode, opcode, msg, fee, rpc_uri, safe)

//process.argv.forEach(function(val, index, array) {
//     const key = "5JZ4RXH4MoXpaUQMcJHo8DxhZtkf5U5VnYd9zZH8BRKZuAbxZEw"
//     getTx(key);
//     console.log(index + ': ' + val);
//})

//var config = {
//  safe: true,
//  data: ["0x6d02", "hello from datapay"],
//  pay: {
//    key: "5JZ4RXH4MoXpaUQMcJHo8DxhZtkf5U5VnYd9zZH8BRKZuAbxZEw",
//    rpc: "https://api.mattercloud.net",
//    fee: 400,
//    to: [{
//      address: "1A2JN4JAUoKCQ5kA4pHhu4qCqma8jZSU81",
//      value: 1000
//    }]
//  }
//}
