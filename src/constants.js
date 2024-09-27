import global_climate_action_data from './data/global_climate_action.json';
import host_country_guests from './data/host_country_guests.json';
import intergovernmental_orgs from './data/intergovernmental_orgs.json';
import media from './data/media.json';
import non_governmental_orgs from './data/non_governmental_orgs.json';
import party_overflow from './data/party_overflow.json';
import special_agencies_and_rel_org from './data/special_agencies_and_rel_org.json';
import special_agencies_and_rel_org_overflow from './data/special_agencies_and_rel_org_overflow.json';
import temp_passes from './data/temp_passes.json';
import un_secretariat_units_bodies from './data/un_secretariat_units_bodies.json';
import un_secretariat_units_bodies_overflow from './data/un_secretariat_units_bodies_overflow.json';

export const keys = [
"global_climate_action_data",
"host_country_guests",
"intergovernmental_orgs",
"media",
"non_governmental_orgs",
"party_overflow",
"special_agencies_and_rel_org",
"special_agencies_and_rel_org_overflow",
"temp_passes",
"un_secretariat_units_bodies",
"un_secretariat_units_bodies_overflow"
];

export const Datasets = {
"global_climate_action_data" : global_climate_action_data,
"host_country_guests": host_country_guests,
"intergovernmental_orgs": intergovernmental_orgs,
"media": media,
"non_governmental_orgs": non_governmental_orgs,
"party_overflow": party_overflow,
"special_agencies_and_rel_org": special_agencies_and_rel_org,
"special_agencies_and_rel_org_overflow": special_agencies_and_rel_org_overflow,
"temp_passes": temp_passes,
"un_secretariat_units_bodies": un_secretariat_units_bodies,
"un_secretariat_units_bodies_overflow": un_secretariat_units_bodies_overflow,
};

export const relationOptions = [
    "Paid relationship/contract with the nominating entity",
    "Paid relationship/contract with an affiliate/member of the nominating entity",
    "Unpaid advisory capacity",
    "Partner/sponsorship of the nominating entity",
    "Guest of the nominating entity",
    "Other (please specify)",
    "Choose not to disclose"
];

export const nominatorOptions = [
    "Albania", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Barbados", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia (Plurinational State of)", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei Darussalam", "Bulgaria", "Cameroon", "Canada", "Chad", "Chile", "China", "Colombia", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia", "Côte d'Ivoire", "Democratic Republic of the Congo", "Denmark", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Eswatini", "Ethiopia", "European Union", "Fiji", "Finland", "France", "Gabon", "Gambia", "Germany", "Ghana", "Greece", "Guatemala", "Guinea", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Monaco", "Mongolia", "Morocco", "Namibia", "Nepal", "Netherlands (Kingdom of the)", "New Zealand", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Republic of Korea", "Saint Kitts and Nevis", "Saint Vincent and the Grenadines", "Samoa", "Saudi Arabia", "Senegal", "Serbia", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "State of Palestine", "Sudan", "Sweden", "Switzerland", "Syrian Arab Republic", "Tajikistan", "Thailand", "Togo", "Trinidad and Tobago", "Tunisia", "Turkmenistan", "Tuvalu", "Türkiye", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom of Great Britain and Northern Ireland", "United Republic of Tanzania", "United States of America", "Uruguay", "Vanuatu", "Venezuela (Bolivarian Republic of)", "Viet Nam", "Yemen", "Zambia", "Zimbabwe"
];
