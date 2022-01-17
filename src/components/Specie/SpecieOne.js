import React from 'react'
import {Item} from 'semantic-ui-react';

const description = [
   'Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their',
   'tiny stature, and even others for their massive size.',
].join(' ')

export default function SpecieOne() {

   return (
      <>
         <Item.Group>
            <Item>

               <Item.Content>
               <Item.Header as='a'>Cute Dog</Item.Header>
               <Item.Description>
                  <p>{description}</p>
                  <p>
                     Many people also have their own barometers for what makes a cute
                     dog.
                  </p>
               </Item.Description>
               </Item.Content>
            </Item>

            <Item>

               <Item.Content>
               <Item.Header as='a'>Cute Dog</Item.Header>
               <Item.Description content={description} />
               </Item.Content>
            </Item>

            <Item>
               <Item.Content header='Cute Dog' description={description} />
            </Item>
         </Item.Group>
      </>
   )

}
