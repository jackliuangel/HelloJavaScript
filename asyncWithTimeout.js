//https://www.30secondsofcode.org/articles/s/javascript-await-timeout
////////////////////////////////////////
//以下这段的目的： 如果异步调用的内容，超过3秒都没有返回，就报错

const awaitTimeout = (delay, reason) =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => (reason === undefined ? resolve() : reject(reason)), //即超时就调用reject（reason）
      delay
    )
  );

const wrapPromise = (promise, delay, reason) =>
  Promise.race([promise, awaitTimeout(delay, reason)]); //race的意思是，哪个先回复都当是这个promise有回复，所以会执行resolve的内容

const mockFetchWithinTime = url=>{
    
    return url+" 200 OK"
}


const waitThenRun = delay =>
  new Promise(resolve => setTimeout(resolve, delay));

const mockFetchOutOfTime = async url=>{
    await waitThenRun(4000);
    // console.log('Hi'); 
}

const mockFetch= mockFetchOutOfTime;


wrapPromise(mockFetch('https://cool.api.io/data.json'), 3000, {
  reason: 'Fetch timeout',
})
  .then(data => {
    console.log("fetch finished within time: "+data);
  })
  .catch(data => console.log(`Failed with reason: ${data.reason}`));
// Will either log the `message` if `fetch` completes in under 3000ms
// or log an error message with the reason 'Fetch timeout' otherwise



