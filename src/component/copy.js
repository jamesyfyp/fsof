import carKeys from '../images/carkeys.png';
import partsAndLabor from '../images/partsandlabor.jpg';
import dollarSign from '../images/dollarsign.png';
import ai from '../images/ai.png';
import ari from '../images/ari.png';
import efm from '../images/efm.png';
import ScheduledMaintenance from '../images/SchenduledMaintenance.jpg';
import scan from '../images/scan.jpg';
import ac from '../images/AC.png';
import brakes from '../images/brake.jpg';
import steering from '../images/steering.jpg';
import emissions from '../images/emissions.jpg';
import fuel from '../images/fuelinjector.png';
import cooling from '../images/cooling.jpg';
import starting from '../images/starting.jpg';
import powertrain from '../images/powertrain.jpg';
import drivetrain from '../images/drivetrain.jpg';
import transmission from '../images/transmission.jpg';
import differential from '../images/differential.jpg';




const section = {
    services: { 
        text: ['Providing efficient & excellent customer service is our primary goal.', 'Here are some of the services we off our customers:'],
        id: 'Services',
        customerServices: [
            {text: 'Scheduled Maintenance', image: ScheduledMaintenance},
            {text: 'Vehicle Diagnostics and Scans', image: scan},
            {text: 'Air Conditioning Systems', image: ac},
            {text: 'Brake Systems', image: brakes},
            {text: 'Steering Systems', image: steering},
            {text: 'Emission Systems', image: emissions},
            {text: 'Fuel Systems', image: fuel},
            {text: 'Cooling Systems', image: cooling},
            {text: 'Exhaust Systems', image: emissions},
            {text: 'Crank/Starting Systems', image: starting},
            {text: 'Power Train', image: powertrain},
            {text: 'Drive Train', image: drivetrain},
            {text: 'Transmissions', image: transmission},
            {text: 'Differnetials', image: differential},
            {text: 'Vehicle drop off and pick up.', image: carKeys},
            {text: 'Competitive pricing.', image: partsAndLabor},
            {text: 'Net 30 Accounts', image: dollarSign}
         ],  
                
    },
    certfiedVendors: {
        id: 'Certified Fleet Maintenance Provider!',
        text: ['Certified through these fleet management programs and more!'],
        companyName: [
            {text:'Auto Integrate', image:ai},
            {text:'Element', image:efm},
            {text:'ARI', image:ari}
        ]        
    },
    references: { 
        text: ['Feel free to contact some of the businesses we work with.', 'Click for contact information!'],
        id: 'References',
        refObj:[ 
            {name:'Regions Banks', num: '1-800-743-4667', contact: 'Jardine Lewis', email: 'jardine.lewis@regions.com' },
            {name:'Christine D. Fiore Kirsch CPA', num: '954-639-9118', contact: 'Christine D. Fiore Kirsh', email: 'christine@cmdcpalalaw.com'},
            {name:'Advanced Auto Parts', num: '954-309-9382', contact: 'Vicky Mendoza', email: 'vicky.mendoza2@advance-auto.com' },
            {name:'Edd Helms Air Condintioning & Electric', num: '1-800-329-2520', contact: 'Bubba Smith', email: 'lsmith@eddhelms.com' },
            {name:'Kristine M Johnson Law', num: '954-320-4595', contact: 'Kristen M. Johnson', email: 'kmjlaw@prodigy.net' },          
        ],
    },
    contact: { 
        text: ['Contact us if you have any inquiries about our services.', 'We are expanding! Don\'t worry if we\'re not in your area already. We can be!'],
        id: 'Contact',
    }
}

  export default section