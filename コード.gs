function wmap_column_convert(colmun_number) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var result = sheet.getRange(1, colmun_number);
  result = result.getA1Notation();
  result = result.replace(/\d/,'');
  
  return result;
}
