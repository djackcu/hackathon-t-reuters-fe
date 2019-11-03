import React from 'react';

function Review() {
    return (
        <div><h1 className='title is-1'>Add Reviews</h1>
        <div className='columns is-vertical is-centered' style={{ height: '1160px' }}>
                <form>
                    <div className='column' style={{ padding: '100px' }}>                        
                        <div className='field is-horizontal'>
                            <div className="field-body">
                            <label className="label">Title: </label>
                            &nbsp; &nbsp; <input className="input is-primary" type="text" placeholder="title" />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control field-body">
                            <label className="label">Rating: &nbsp; &nbsp; </label>
                                <div className="select is-primary">
                                    <select>
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control field-body">
                            <label className="label">Year: &nbsp; &nbsp;</label>
                            <div className="select is-primary">
                                    <select>
                                        <option>2014</option>
                                        <option>2015</option>
                                        <option>2016</option>
                                        <option>2017</option>
                                        <option>2018</option>
                                        <option>2019</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control field-body">
                            <label className="label">Season: </label>
                            &nbsp; &nbsp; <input className="input is-primary" type="text" placeholder="Season" />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control field-body">
                            <label className="label">What languages do you speak? &nbsp; &nbsp;</label>
                            &nbsp; &nbsp; <input className="input is-primary" type="text" placeholder="Language" />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control field-body">
                            <label className="label">What tasks were assigned to you? </label>
                            &nbsp; &nbsp; <input className="input is-primary" type="text" placeholder="Tasks" />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control field-body">
                            <label className="label">What did you like? </label>
                            &nbsp; &nbsp; <input className="input is-primary" type="textarea" placeholder="Like" />                                
                            </div>
                        </div>
                        <div className="field">
                            <div className="control field-body">
                            <label className="label">What you didn't like? </label>
                            &nbsp; &nbsp; <input className="input is-primary" type="textarea" placeholder="DisLike" />   
                            </div>
                        </div>
                        <div className="field">
                            <div className="control field-body">
                            <label className="label">Would you recommend this employer? </label>
                            &nbsp; &nbsp;
                                <label className="radio ">
                                    <input type="radio" name="answer" />
                                    Yes
                                </label>
                                <label className="radio">
                                    <input type="radio" name="answer" />
                                    No
                                </label>  
                            </div>
                        </div>
                        <div className="field">
                            <div className="control field-body">
                            <label className="label">How did you find the employer? </label>
                            &nbsp; &nbsp; <input className="input is-primary" type="text" placeholder="Found Through:" />    
                            </div>
                        </div>
                        <div className="field">
                            <div className="control field-body">
                            <label className="label">Did you have enough privacy? </label>
                            &nbsp; &nbsp;
                                <label className="radio ">
                                    <input type="radio" name="answer" />
                                    Yes
                                </label>
                                <label className="radio">
                                    <input type="radio" name="answer" />
                                    No
                                </label>  
                            </div>
                        </div>
                        <div className="field">
                            <div className="control field-body">
                            <label className="label">Were you happy? </label>
                            &nbsp; &nbsp;
                                <label className="radio ">
                                    <input type="radio" name="answer" />
                                    Yes
                                </label>
                                <label className="radio">
                                    <input type="radio" name="answer" />
                                    No
                                </label>  
                            </div>
                        </div>
                        <div className="field">
                            <div className="control field-body">
                            <label className="label">Did you feel safe? </label>
                            &nbsp; &nbsp;
                                <label className="radio ">
                                    <input type="radio" name="answer" />
                                    Yes
                                </label>
                                <label className="radio">
                                    <input type="radio" name="answer" />
                                    No
                                </label>  
                            </div>
                        </div>
                        <div className="field">
                            <div className="control field-body">
                            <label className="label">Were you scared? </label>
                            &nbsp; &nbsp;
                                <label className="radio ">
                                    <input type="radio" name="answer" />
                                    Yes
                                </label>
                                <label className="radio">
                                    <input type="radio" name="answer" />
                                    No
                                </label>  
                            </div>
                        </div>
                        <div className="field">
                            <div className="control field-body">
                            <label className="label">Were you paid on time? </label>
                            &nbsp; &nbsp;
                                <label className="radio ">
                                    <input type="radio" name="answer" />
                                    Yes
                                </label>
                                <label className="radio">
                                    <input type="radio" name="answer" />
                                    No
                                </label>  
                            </div>
                        </div>
                        <div className="field">
                            <div className="control field-body">
                            <label className="label">Were you paid as promised? </label>
                            &nbsp; &nbsp;
                                <label className="radio ">
                                    <input type="radio" name="answer" />
                                    Yes
                                </label>
                                <label className="radio">
                                    <input type="radio" name="answer" />
                                    No
                                </label>  
                            </div>
                        </div>
                        <div className="field">
                            <div className="control field-body">
                            <label className="label">Did you have work contract?: </label>
                            &nbsp; &nbsp;
                                <label className="radio ">
                                    <input type="radio" name="answer" />
                                    Yes
                                </label>
                                <label className="radio">
                                    <input type="radio" name="answer" />
                                    No
                                </label>  
                            </div>
                        </div>
                        <div className="field">
                            <div className="control field-body">
                            <label className="label">What hours did you work? </label>
                            &nbsp; &nbsp; <input className="input is-primary" type="text" placeholder="Work Hours" />
                            </div>
                        </div>
                       
                        <div className="field">
                        <div className="control field-body">
                            <div><label className="label"> </label></div>
                            <button className="button is-link" >Submit</button>
                        </div> 
                        </div> 
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Review;