const supabaseUrl = 'https://yevkpqzirifkuvrcntxc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...Ams' // trimmed here for safety
const supabase = supabase.createClient(supabaseUrl, supabaseKey)

async function uploadFile(inputId, taskName) {
  const fileInput = document.getElementById(inputId)
  const file = fileInput.files[0]
  if (!file) {
    alert('Please select a file for ' + taskName)
    return
  }

  const filePath = `${taskName}/${Date.now()}_${file.name}`

  let { error } = await supabase.storage.from('uploads').upload(filePath, file)
  if (error) {
    alert('Upload failed for ' + taskName)
  } else {
    alert(taskName + ' uploaded successfully')
  }
}

function submitTasks() {
  uploadFile('task1', 'task1')
  uploadFile('task2', 'task2')
}
