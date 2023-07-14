import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

Mobile.startApplication('C:\\Users\\BUDI HERMAWAN\\Katalon Studio\\EduApp\\spymobiletest\\spymobile\\Calculator_v8.1.apk', 
    true)

Mobile.tap(findTestObject('Object Repository/Berhitung/button_no.7'), 0)

Mobile.tap(findTestObject('Object Repository/Berhitung/button_no.0'), 0)

Mobile.tap(findTestObject('Berhitung/button_plus'), 0)

Mobile.tap(findTestObject('Object Repository/Berhitung/button_no.8'), 0)

Mobile.tap(findTestObject('Berhitung/button_equal'), 0)

Mobile.tap(findTestObject('Berhitung/button_no.7'), 0)

Mobile.tap(findTestObject('Berhitung/button_no.8'), 0)

Mobile.tap(findTestObject('Object Repository/Berhitung/button_minus'), 0)

Mobile.tap(findTestObject('Object Repository/Berhitung/button_no.4'), 0)

Mobile.tap(findTestObject('Berhitung/button_equal'), 0)

Mobile.tap(findTestObject('Berhitung/button_no.7'), 0)

Mobile.tap(findTestObject('Berhitung/button_no.4'), 0)

Mobile.tap(findTestObject('Object Repository/Berhitung/button_x'), 0)

Mobile.tap(findTestObject('Object Repository/Berhitung/button_no.2'), 0)

Mobile.tap(findTestObject('Berhitung/button_equal'), 0)

Mobile.tap(findTestObject('Object Repository/Berhitung/button_no.1'), 0)

Mobile.tap(findTestObject('Berhitung/button_no.4'), 0)

Mobile.tap(findTestObject('Berhitung/button_no.8'), 0)

Mobile.tap(findTestObject('Object Repository/Berhitung/button_divide'), 0)

Mobile.tap(findTestObject('Object Repository/Berhitung/button_no.5'), 0)

Mobile.tap(findTestObject('Berhitung/button_equal'), 0)

Mobile.tap(findTestObject('Berhitung/button_no.2'), 0)

Mobile.tap(findTestObject('Object Repository/Berhitung/button_no.9'), 0)

Mobile.tap(findTestObject('Object Repository/Berhitung/button_coma'), 0)

Mobile.tap(findTestObject('Object Repository/Berhitung/button_no.6'), 0)

Mobile.closeApplication()

