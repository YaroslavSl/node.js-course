
async function main() {
    const values = await Promise.allSettled([
        Promise.resolve(33),
        new Promise(resolve => setTimeout(() => resolve(66), 0)),
        99,
        Promise.reject(new Error('an error'))
      ])
      console.log(values)
}

main().then();