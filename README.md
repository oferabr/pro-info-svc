
install & start
* yarn 
* yarn start


### Endpoints
* ```prospera/weather/info``` 
    ##### params
    
    | Name          | Description                                                                                                          
    | --------------| ----------------------|  
    | `city`        |  city name - string   |
    | `countryCode` |  country code- string |

* example:   
`/prospera/weather/info?city=tokyo&countryCode=jp`

    response:
    returns the current weather in the requested city.


* ```/prospera/movies/info``` 
    ##### params
    
    | Name          | Description                                                                                                                                                    
    | --------------| -------------------|  
    | `movieId`     | movie Id as in imdb|

* example:   
`/prospera/movies/info?movieId=tt3896198`     

response:
returns the movie info from imdb web site.


##### What you would do differently 

* curren implementation uses internal cache with TTL, where the difference between the two
  end points is the ttl.
  for the weather info I would still use the same method, internal cache with short ttl.
  in case of weather we should to return relaible info or return an error,
  and not unrelaible response.
  (in case we get error from our weather info supplier).

  in case of the movies, the information is more static (movie name, oscars, etc...)
  but there is sill dynamic information (rating, incomes, etc..).
  I would also use cache with longer ttl and validation mechanism.
  for each value in my cache I would add creationDate.
  when user requests for a movie if the movie exists in my cache and I the response still valid.
  return the response from cache.
  if not, I would make a request to the service:  
    * success: return the response and update cache.
     * failure: return the value from the cache, and try to call & update again.
        
    in this way the users still get the required information, and the information is 
    almost 100% relaible.




