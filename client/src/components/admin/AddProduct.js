import React from 'react'
import { Button } from 'react-bootstrap'

function AddProduct() {
    return (
        <div className="add-prod-wrap">
            <div className="add-prod-heading">Add a product</div>
            <form className="add-prod-form">


               <div className="prod-id-field">
               <label htmlFor="prodid">Product ID</label><br/>
                <input id="prodid" type="text" name="prodId" className="field" />
                </div>
                <div className="prod-name-field">
                <label htmlFor="prodname">Product Name</label><br/>    
                <input id="prodname" type="text" name="prodName" className="field"/>
                </div>
                <div className="prod-price-field">
                <label htmlFor="prodprice">Product Price</label><br/>
                <input id="prodprice" type="number" name="prodPrice" min="0" step="any" className="field"/>
                
                </div>
                <div className="prod-discription-field">
                <label htmlFor="discrip">Product Discription</label><br/>
                    <textarea id="discrip" placeholder="Add a description" className="field"></textarea>
                </div>
                <div className="prod-category-field">
                    <div>Select Category</div>
                
                <input type="radio" id="men" name="prodCategory" value="men"/> 
                <label htmlFor="html"> Men</label>
               
                
                <input type="radio" id="women" name="prodCategory" value="women"/>
                <label htmlFor="women"> Women</label>
                
                
                <input type="radio" id="kids" name="prodCategory" value="kids"/>
                <label htmlFor="kids"> Kids</label>
                </div>
                
               
                <div className="prod-sizes-field">
                  
                <div> Select available sizes</div>
                
                <input type="checkbox" id="xxsmall" name="size" value="xxsmall"/>
                <label htmlFor="xxsmall"> xxsmall</label>
                
                
                <input type="checkbox" id="xsmall" name="size" value="xsmall"/>
                <label htmlFor="xsmall"> xsmall</label>
                
                
                <input type="checkbox" id="small" name="size" value="small"/>
                <label htmlFor="small"> small</label>
                
                
                <input type="checkbox" id="medium" name="size" value="medium"/>
                <label htmlFor="medium"> medium</label>
               
                
                <input type="checkbox" id="large" name="size" value="large"/>
                <label htmlFor="large"> large</label>
                
                
                <input type="checkbox" id="xlarge" name="size" value="xlarge"/>
                <label htmlFor="xlarge"> xlarge</label>
               
                 
                <input type="checkbox" id="xxlarge" name="size" value="xxlarge"/>
                <label htmlFor="xxlarge"> xxlarge</label>
                        
                
                </div>
                <div className="prod-photo-field">
                <label htmlFor="photos">Select photos</label><br/>
                <input type="file" id="photos" name="Prodphotos" multiple />
                </div>
                <Button type="submit" variant="dark">Add + </Button>
                <Button variant="info" type="reset">Reset</Button>
            </form>
        </div>
    )
}

export default AddProduct
