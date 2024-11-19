export const getAccessToken = (props)=> new Promise((resolve,reject)=>{
    props?.oktaAuth?.isAuthenticated().then(res=>{
        props?.oktaAuth?.token.getWithoutPrompt({
          responseType: 'token',
          scopes: []
         })
        .then(function(res) {
          resolve(res?.tokens?.accessToken?.accessToken)
        })
        .catch(function(err) {
          console.error(err)
          reject(err?.message)
        });
      }).catch(err=>{
        console.error(err)
        reject(err?.message)
      })
})