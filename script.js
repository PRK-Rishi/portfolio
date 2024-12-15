// Toggle Sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.style.right = sidebar.style.right === '0px' ? '-250px' : '0px';
}

// Close Sidebar when clicking a link
function closeSidebar() {
  document.getElementById('sidebar').style.right = '-250px';
}
