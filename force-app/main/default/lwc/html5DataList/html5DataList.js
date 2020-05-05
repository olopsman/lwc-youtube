import { LightningElement } from 'lwc';

export default class Html5DataList extends LightningElement {
    stateOptions = [
        { label: 'Alabama', value: 'AL', id: 'AL' },
        { label: 'Alaska', value: 'AK', id: 'AK' },
        { label: 'Arizona', value: 'AZ', id: 'AZ' },
        { label: 'Arkansas', value: 'AR', id: 'AR' },
        { label: 'California', value: 'CA', id: 'CA' },
        { label: 'Colorado', value: 'CO', id: 'CO' },
        { label: 'Connecticut', value: 'CT', id: 'CT' },
        { label: 'Delaware', value: 'DE', id: 'DE' },
        { label: 'Florida', value: 'FL', id: 'FL' },
        { label: 'Georgia', value: 'GA', id: 'GA' },
        { label: 'Hawaii', value: 'HI', id: 'HI' },
        { label: 'Idaho', value: 'ID', id: 'ID' },
        { label: 'Ilinois', value: 'IL', id: 'IL' },
        { label: 'Indiana', value: 'IN', id: 'IN' },
        { label: 'Iowa', value: 'IA', id: 'IA' },
        { label: 'Kansas', value: 'KS', id: 'KS' },
        { label: 'Kentucky', value: 'KY', id: 'KY' },
        { label: 'Lousiana', value: 'LA', id: 'LA' },
        { label: 'Maine', value: 'ME', id: 'ME' },
        { label: 'Marryland', value: 'MD', id: 'MD' },
        { label: 'Massachusettes', value: 'MA', id: 'MA' },
        { label: 'Michigan', value: 'MI', id: 'MI' },
        { label: 'Minnesota', value: 'MN', id: 'MN' },
        { label: 'Mississippi', value: 'MS', id: 'MS' },
        { label: 'Missouri', value: 'MO', id: 'MO' },
        { label: 'Montana', value: 'MT', id: 'MT' },
        { label: 'Nebraska', value: 'NE', id: 'NE' },
        { label: 'Nevada', value: 'NV', id: 'NV' },
        { label: 'New Hamshire', value: 'NH', id: 'NH' },
        { label: 'New Jersey', value: 'NJ', id: 'NJ' },
        { label: 'New Mexico', value: 'NM', id: 'NM' },
        { label: 'New York', value: 'NY', id: 'NY' },
        { label: 'North Carolina', value: 'NC', id: 'NC' },
        { label: 'North Dakota', value: 'ND', id: 'ND' },
        { label: 'Ohio', value: 'OH', id: 'OH' },
        { label: 'Oklahoma', value: 'OK', id: 'OK' },
        { label: 'Oregon', value: 'OR', id: 'OR' },
        { label: 'Pennsylvania', value: 'PA', id: 'PA' },
        { label: 'Rhode Island', value: 'RI', id: 'RI' },
        { label: 'South Carolina', value: 'SC', id: 'SC' },
        { label: 'South Dakota', value: 'SD', id: 'SD' },
        { label: 'Tennessee', value: 'TN', id: 'TN' },
        { label: 'Texas', value: 'TX', id: 'TX' },
        { label: 'Utah', value: 'UT', id: 'UT' },
        { label: 'Vermont', value: 'VT', id: 'VT' },
        { label: 'Virginia', value: 'VA', id: 'VA' },
        { label: 'Washington', value: 'WA', id: 'WA' },
        { label: 'West Virginia', value: 'WV', id: 'WV' },
        { label: 'Wisconson', value: 'WI', id: 'WI' },
        { label: 'Wyoming', value: 'WY', id: 'WY' },
        { label: 'District of Columbia', value: 'DC', id: 'DC' }
    ];

    renderedCallback(){
        let listId = this.template.querySelector("datalist").id;
        this.template.querySelector("input").setAttribute("list", listId)

    }
}