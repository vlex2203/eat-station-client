export const getMarkerIcon = category => {
  switch (category){
    case 'italy':
      return 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
    case 'france':
      return 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
    case 'mexico':
      return 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
    default:
      return 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png';
  }
}