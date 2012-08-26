/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"BsgwH4bj89gHeT0pbiQRtbZ3fGjkQIDz"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"dR1gIVkL9Z4vpoW70P9oCwjKX1HwEKy1"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"MN0o7tuou9Bk9OcMKEXCBAm45gXSHDr3"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"nCVaOq79ir6ms3xt38AFLAM7HWIW9Z1i"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"kjZDCO8UGduhvQ0RURBXNzoFOZ3JQkBw"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"8B0oy9gIEJyRu0gN8RedNsJDkXdDCi01"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
